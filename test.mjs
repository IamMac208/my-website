import { useFetch } from 'nuxt';


const { data, pending, error } = useFetch('/api/weather');

  
console.dir(data);
