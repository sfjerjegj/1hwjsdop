

const jsonData = {
    name: "Beka",
    age: 14,
    city: "Kyrgyzstan"
  };
  
  
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(jsonData);
    }, 2000); 
  });
  
  
  myPromise
    .then(data => {
      
      const parsedData = JSON.parse(data);
  
      
      console.log(parsedData);
    })
    .catch(error => {
      console.error(error);
    });
  