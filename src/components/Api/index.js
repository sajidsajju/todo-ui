import { auth, provider, firestore } from "../../util/firebase";
import { Alerts } from "../Alerts";

const ref = firestore.collection("users");

export const user = async () => {
  await auth
    .signInWithPopup(provider)
    .then(async result => {
      const user = result.user;

      const userRef = firestore.doc(`users/${user.uid}`);

      const snapshot = await userRef.get();
      if (!snapshot.exists) {
        const userName = user.displayName;
        const email = user.email;

        try {
          await userRef.set({
            userName,
            email,
            createdAt: new Date(),
          });
          const alert = {
            message: "User Registered !",
            success: true,
          };
          Alerts(alert);
        } catch (error) {
          const alert = {
            message: error.message,
            success: false,
          };
          Alerts(alert);
        }
      }
    })
    .catch(error => {
      const alert = {
        message: error.message,
        success: false,
      };
      Alerts(alert);
    });
};

export const getTodos = async (uid, setData) => {
  const todoRef = ref.doc(uid).collection("todos").orderBy("date", "desc");

  try {
    await todoRef.onSnapshot(snapshot => {
      const todos = snapshot.docs.map(doc => {
        const todo = doc.data();
        const id = doc.id;
        return { id, ...todo };
      });
      setData(todos);
    });
  } catch (error) {
    const alert = {
      message: error.message,
      success: false,
    };
    Alerts(alert);
  }
};

export const addTodo = async (uid, todo) => {
  const addRef = ref.doc(uid).collection("todos").doc();
  try {
    await addRef.set(todo);
    const alert = {
      message: "Todo Added !",
      success: true,
    };
    Alerts(alert);
  } catch (error) {
    const alert = {
      message: error.message,
      success: false,
    };
    Alerts(alert);
  }
};

export const deleteTodo = async (uid, id) => {
  const deleteRef = ref.doc(uid).collection("todos").doc(id);

  try {
    await deleteRef.delete();
    const alert = {
      message: "Todo Deleted !",
      success: true,
    };
    Alerts(alert);
  } catch (error) {
    const alert = {
      message: error.message,
      success: false,
    };
    Alerts(alert);
  }
};
export const editTodo = async (uid, data) => {
  const editRef = ref.doc(uid).collection("todos").doc(data.id);
  try {
    await editRef.set({
      completed: data.completed,
      text: data.text,
      date: data.date,
    });
    const alert = {
      message: "Todo Updated !",
      success: true,
    };
    Alerts(alert);
  } catch (error) {
    const alert = {
      message: error.message,
      success: false,
    };
    Alerts(alert);
  }
};
