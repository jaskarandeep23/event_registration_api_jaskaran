import admin from "firebase-admin";
import path from "path";
import fs from "fs";

const serviceAccountPath = path.join(__dirname, "../../../serviceAccountKey.json");
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}
const db = admin.firestore(); 
export { db };

export default admin;
