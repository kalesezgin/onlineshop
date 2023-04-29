import { initializeApp } from 'firebase/app'

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  
} from 'firebase/auth'

import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  collection, 
  writeBatch, 
  query,
  getDocs,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAegkufz4hDmetYW4piAU-XpwN3zEmi0bM',
  authDomain: 'crwn-clothing-db-cff7c.firebaseapp.com',
  projectId: 'crwn-clothing-db-cff7c',
  storageBucket: 'crwn-clothing-db-cff7c.appspot.com',
  messagingSenderId: '788581560667',
  appId: '1:788581560667:web:0f5f589dd75235fa616a7e',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('done')

}  

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection (db, 'categories')
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((acc,docSnapshot) => {
    const {title, items} = docSnapshot.data()
    acc[title.toLowerCase()]= items
    return acc
  },{})
  return categoryMap
}

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot.exists())

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (error) {
      console.log('error creating the user ', error.message)
    }
  }
  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    throw new Error('Email and password are required')
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    return userCredential.user
  } catch (error) {
    throw new Error('Error creating user: ' + error.message)
  }
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return
  }

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback) 