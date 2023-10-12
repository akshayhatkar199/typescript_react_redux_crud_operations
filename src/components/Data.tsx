const userList: User[] = [
    {
      id: 1,
      name: "Rohan Patil",
      email: "rohan@gmail.com",
    },
    {
      id: 2,
      name: "Aman Mishra",
      email: "aman@gmail.com",
    },
    {
      id: 3,
      name: "Minal Rahode",
      email: "minal@gmail.com",
    },
  ];
  
  interface User {
    id: number;
    name: string;
    email: string;
  }
  
  export default userList;