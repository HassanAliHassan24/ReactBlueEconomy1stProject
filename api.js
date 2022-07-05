// import axios from "axios";


// const usersUrl = 'http://localhost:8080';
// export const addUser = async (user) => {
//     try{
//        return await axios.post( `${usersUrl}/users/$`,(user));
//   }catch (error) {
//     console.log('Error while calling addUser api', error.message)
//   }
// }  

// export const getUsers = async (id) => {
//   id = id || '';
//   try{
//     return await axios.get(`${usersUrl}/{id}`,id);

//   }catch(error) {
//     console.log('Error while calling getUsers api',error.message);
//   }
// }

// // export const getUser = async (data) => {
// //   try{
// //     return await axios.get(`{API_URL}/${data}`);

// //   }catch(error) {
// //     console.log('Error while calling getUser api',error.message);
// //   }
// // }

// export const editUser = async (id, user) => {
//   try{
//     return await axios.put(`${usersUrl}/{id}`,user);

//   }catch (error) {
//     console.log('Error while calling editUser api',error.message);
//   }

// }

// export const deleteUser = async (id) => {
//   try{

//     return await axios.delete(`${usersUrl}/{id}`,id);

//   }catch (error){
//     console.log('Error while calling deleteUser api',error.message);
//   }
// }