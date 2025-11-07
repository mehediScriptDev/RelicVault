export interface Artifact {
  id: string;
  name: string;
  image: string;
  type: 'Tools' | 'Weapons' | 'Documents' | 'Writings' | 'Pottery' | 'Jewelry' | 'Other';
  historicalContext: string;
  createdAt: string;
  discoveredAt: string;
  discoveredBy: string;
  presentLocation: string;
  addedBy: {
    name: string;
    email: string;
  };
  likeCount: number;
  likedBy: string[]; // Array of user emails who liked this artifact
  shortDescription: string;
}

export interface User {
  name: string;
  email: string;
  photoURL: string;
}
