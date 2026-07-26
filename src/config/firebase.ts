  import { initializeApp } from 'firebase/app'
  import { getAuth } from 'firebase/auth'
  
  const firebaseConfig = {
    apiKey: "AIzaSyC-mEHWsdeFsRDPDmhGMRelLdTgtmswj7c",
    authDomain: "legaldocumentsai.firebaseapp.com",
    projectId: "legaldocumentsai",
  }
  
  const app = initializeApp(firebaseConfig)
  
  export const auth = getAuth(app)
  
  export default app