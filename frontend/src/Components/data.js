function calculatePosted(createdAt) {
  const now = new Date(); // Current date and time
  const createdDate = new Date(createdAt); // Convert createdAt to Date object
  
  const differenceInMs = now - createdDate; // Difference in milliseconds
  
  const seconds = Math.floor(differenceInMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    return `Just now`;
  }
}


export const dogs = [
    {
      id: '1',
      name: 'Jackson',
      breed: 'ShihTzu',
      location: 'Cranleigh',
      images: [
        'https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg',
        'https://cdn.prod.website-files.com/61424e4d194b43f2e03c009c/66a1f751d7b3e7b4afd48760_20240725_blog_thumbnail1.jpg',
        'https://images.ctfassets.net/440y9b545yd9/53KkmFPEBEsbxCzTDjrDmm/5bccce4f47e5f1c68ae1dabdd8db1293/German-Shepherd850.jpg'
      ],
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      features: [
        'Can live with other dogs' ,
        'Can live with other cats' ,
        'Friendly with children and babies' ,
        'Microchipped' ,
        'House-trained' ,
      ],
    },
    {
      id: '2',
      name: 'Dotty',
      breed: 'Staffordshire Bull Terrier, Jack Russell',
      location: 'Canterbury',
      images: [
        'https://images.squarespace-cdn.com/content/v1/54822a56e4b0b30bd821480c/51fe71a3-cb12-4ac2-882f-45955401dd53/Golden+Retrievers+dans+pet+care.jpeg?format=500w',
        'https://cdn.shopify.com/s/files/1/2214/3103/files/10_9e629aa1-e7eb-4672-a042-cc4d631be9d9.jpg?v=1629882440',
        'https://wellbeloved.com/cdn/shop/articles/JWB-UK-10.jpg?v=1719574462'
      ],
      createdAt: new Date().toISOString(),
      
      
    },
    {
      id: '3',
      name: 'Luna',
      breed: 'Husky - Siberian',
      location: 'Camberley',
      images: [
        'https://dogacademy.org/blog/wp-content/uploads/2023/09/maltese-sitting-in-a-sunny-meadow.jpg',
        'https://hips.hearstapps.com/hmg-prod/images/bichon-frise-1660897169.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc0WiJjZ4EGNUXc-D2-E2UjnBBkN22AOOVVdWU6ycNHI9jo5k911nQToUdQlQYzbGjhhY&usqp=CAU'
      ],
      createdAt: new Date().toISOString(),
      
    },
    {
      id: '4',
        name: 'Bello',
        breed: 'Berger Allemand',
        location: 'Tunisia',
        images: [
          'https://www.princeton.edu/sites/default/files/styles/scale_1440/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=lA8UuoHt',
          'https://i.pinimg.com/736x/dd/92/15/dd92154640b6807270bc0d4f051be36a.jpg',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02JM-sUMhWMdG04WbZ5sM9LuRoVbID-yUfR2QF957pfvbyN6WRFvfmXueJhU3eI-iGcA&usqp=CAU'
        ],
        createdAt: new Date().toISOString(),
       
      },
      {
        id: '5',
        name: 'Bello',
        breed: 'Berger Allemand',
        location: 'Tunisia',
        images: [
          'https://cdn.mos.cms.futurecdn.net/ASHH5bDmsp6wnK6mEfZdcU.jpg',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWnhNcs-jmYbEFiJyfoLmTQERCzTqKjNftptar3HCD9Gz-UWJ9WDT9lqBEc3gz3EtS-3s&usqp=CAU',
          'https://i2.obozrevatel.com/news/2024/2/11/image2024-02-0814-57-58.png?size=930x441'
        ],
        createdAt: new Date().toISOString(),
       
      },
      {
        id: '6',
        name: 'Bello',
        breed: 'Berger Allemand ffffffffffffffffffffffffffffff hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
        location: 'Tunisia',
        images: [
          'https://static.vecteezy.com/system/resources/thumbnails/035/520/002/small_2x/ai-generatedgraph-of-cute-puppy-free-photo.jpg',
          'https://t4.ftcdn.net/jpg/09/43/37/17/360_F_943371720_YJ3iUW6wCcJGoWGC0FJr7a8hAykW3yIo.jpg',
          'https://t3.ftcdn.net/jpg/09/31/82/02/360_F_931820263_ix6s7N5p5jpnCx0BjZ8RaBEnNk9Zd3Nr.jpg'
        ],
        createdAt: new Date().toISOString(),
  
      }
  ];

  dogs.forEach(dog => {
    dog.posted = calculatePosted(dog.createdAt);
  });
  
  console.log(dogs);
  
 

  export const cats = [
    {
      id: '7',
      name: 'Whiskers',
      breed: 'Siamese',
      location: 'Sousse',
      images: [
        'https://thumbs.dreamstime.com/b/cats-eyes-cat-22690955.jpg',
        'https://plus.unsplash.com/premium_photo-1673967831980-1d377baaded2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D',
        'https://images.pexels.com/photos/20787/pexels-photo.jpg?cs=srgb&dl=pexels-kmerriman-20787.jpg&fm=jpg'
      ],
      createdAt: new Date().toISOString(),
      
    },
    {
      id: '8',
      name: 'Mittens',
      breed: 'Persian',
      location: 'Tunis',
      images: [
        'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8zdgW_10lBy1zqaxvgneKskLxnW_htZvmjVpKv3R_tJH4xGJJS7Px1Sm7xCWrkgMo16c&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA31zaVLwJGo6YpkCrVbm43kb_H3z3L1jajWz46PGwdM25S7woXJ1OIPIxcJ1EHC4SdjA&usqp=CAU'
      ],
      createdAt: new Date().toISOString(),
      
    },
    {
      id: '9',
      name: 'Bella',
      breed: 'Maine Coon',
      location: 'La Marsa',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ31-OE4i9ST8qidcOnOnmfNJNHzfPfHWszGg&s',
        'https://images.freeimages.com/images/large-previews/cef/roof-climbing-cat-0410-5699221.jpg?fmt=webp&w=500',
        'https://images.freeimages.com/images/large-previews/664/calico-kitten-rooftop-sunbathing-0410-5699214.jpg?fmt=webp&w=500'
      ],
      createdAt: new Date().toISOString(),
      
    },
    {
      id: '10',
      name: 'Leo',
      breed: 'Bengal',
      location: 'Carthage',
      images: [
        'https://media.gettyimages.com/id/629219532/photo/cat-on-bed.jpg?s=612x612&w=gi&k=20&c=o9bb-d3ExepmSpizuaC4d-ZQWlkx2sbtJzA5txyUF7I=',
        'https://media.gettyimages.com/id/185304274/photo/kitten.jpg?s=612x612&w=gi&k=20&c=dY6Sts6GYlk_y-s3UZcNVpJrLNc0kcSNyrs8xHEE67w=',
        'https://i.pinimg.com/736x/b2/ea/6e/b2ea6e55dadc8fdeb55c2ce49eddd4d2.jpg'
      ],
      createdAt: new Date().toISOString(),
      
    }
  ];

  cats.forEach(cat => {
    cat.posted = calculatePosted(cat.createdAt);
  });
  
  console.log(cats);