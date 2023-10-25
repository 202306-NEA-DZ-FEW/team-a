import { v4 as uuidv4 } from "uuid";

export default function createItemsData(uid) {
  return [
    {
      title: "Product One",
      description: "Lorem ipsum description for Product One",
      location: "djelfa",
      id: uuidv4(), // Use a unique ID, e.g., generated with a library like 'uuid'
      images: [
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1467043237213-65f2da53396f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
      ],
      uid: uid,
    },
    {
      title: "Product Two",
      description: "Lorem ipsum description for Product Two",
      location: "djelfa",
      id: uuidv4(),
      images: [
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1467043237213-65f2da53396f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
      ],
      uid: uid,
    },
    {
      title: "Product Three",
      description: "Lorem ipsum description for Product Three",
      location: "djelfa",
      id: uuidv4(),
      images: [
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1467043237213-65f2da53396f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
      ],
      uid: uid,
    },
    {
      title: "Product Four",
      description: "Lorem ipsum description for Product Four",
      location: "djelfa",
      id: uuidv4(),
      images: [
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1467043237213-65f2da53396f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
      ],
      uid: uid,
    },
  ];
}
