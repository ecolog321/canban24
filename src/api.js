
export async function getTasks(token) {
  const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Ошибка");
  }

  const data = await response.json();
  return data;
}

export async function logining(login, password) {
  const response = await fetch("https://wedev-api.sky.pro/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Неверные данные");
  }

  const data = await response.json();
  return  data;
}

export async function registration(name,login, password) {
  const response = await fetch("https://wedev-api.sky.pro/api/user", {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Неверные данные");
  }

  const data = await response.json();
  return data;
}

export async function getTodos() {
  const response = await fetch("https://wedev-api.sky.pro/api/v2/todos", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}
