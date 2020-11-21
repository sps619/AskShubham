function generator() {
      fetch('https://aws.random.cat/meow')
      .then(response => response.json())
      .then(file => {
      console.log(file);
      file.replace(/\\\//g, "/");
      console.log(file);
      img.src=file;
      });