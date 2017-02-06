import ChatRoom from './components/ChatRoom'
import TodoApp from './components/TodoApp'
import ExpenseEntry from './containers/ExpenseEntry'
import ExpenseApp from './containers/ExpenseApp'
import Home from './Home';

//  { path: '/', component: Home, indexRoute: { component: ExpenseApp },
export let routes = [
  { path: '/', component: Home,
    childRoutes: [
      { path: 'todo', component: TodoApp },
      { path: 'chat', component: ChatRoom },

      { path: 'expenses', component: ExpenseEntry },
      { path: 'showExpenses', component: ExpenseApp }
    ]
  }
];
