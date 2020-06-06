import quizPage from '@/views/quiz.vue';
import entryPage from '@/App.vue';

const routes = [
    {
      path: '/',
      component: entryPage,
      name: 'root',
    }, 
    {
      path: '/quiz',
      component:  quizPage,
      name: 'quizPage',
    }];
  export default routes;