const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export interface User {
  id?: number;
  name: string;
  email: string;
}

// GET (Fetch users)
export const getUsers = async (): Promise<User[]> => {
  const res = await fetch(BASE_URL);

  if (!res.ok) throw new Error("Failed to fetch users");

  return res.json();
};

//  POST (Create user)
export const createUser = async (user: User): Promise<User> => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!res.ok) throw new Error("Failed to create user");

  return res.json();
};

//  PUT (Update user)
export const updateUser = async (id: number, user: User): Promise<User> => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!res.ok) throw new Error("Failed to update user");

  return res.json();
};

//  DELETE (Remove user)
export const deleteUser = async (id: number): Promise<void> => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete user");
};