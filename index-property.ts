/* 
    * if You have Object But u don't know the key name and value type then you can use index property
    * Index Property is used to define the type of the key and value of an object.
*/

interface Error_Key {
    [key: string]: string;
}

let user_error: Error_Key = {
    name : "the name is required",
    email : "the email is required",
}




