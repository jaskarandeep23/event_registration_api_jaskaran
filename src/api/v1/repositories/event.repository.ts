import { db } from "../../../config/firebase";
import { Event } from "../models/event.model";

const collection = db.collection("events");

export const createEvent = async (event: Event): Promise<Event> => {
  const docRef = await collection.add(event);
  return { id: docRef.id, ...event };
};

export const getAllEvents = async (): Promise<Event[]> => {
  const snapshot = await collection.get();

  return snapshot.docs.map((doc: FirebaseFirestore.QueryDocumentSnapshot) => {
    const data = doc.data() as Event;

    return {
      id: doc.id,
      ...data,
    };
  });
};

export const getEventById = async (id: string): Promise<Event | null> => {
  const doc = await collection.doc(id).get();

  if (!doc.exists) return null;

  const data = doc.data() as Event;

  return {
    id: doc.id,
    ...data,
  };
};

export const updateEvent = async (id: string, data: Partial<Event>): Promise<Event | null> => { 
  const docRef = collection.doc(id); 
  const doc = await docRef.get(); 
  
if (!doc.exists) return null; 
await docRef.update(data); 
return { id, ...(doc.data() as Event), ...data }; 
}; 

export const deleteEvent = async (id: string): Promise<boolean> => 
  { const docRef = collection.doc(id); 
    const doc = await docRef.get(); 
    if (!doc.exists) return false; 
    await docRef.delete(); 
    return true; 
  };