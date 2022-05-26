import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'main',
  repo: 'https://github.com/AceyAdapter/portfolio.git', // Update to point to your repository
  user: {
   name: 'AceyAdapter', // update to use your name
   email: 'nicholaskreitz@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);