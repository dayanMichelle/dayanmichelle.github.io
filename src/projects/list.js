import Saving from "../img/saving.mp4";
import Crm from '../img/crm.mp4';
import Guitarra from '../img/guitarra.mp4';
export const projects = [
    {
        id:1,
        title: 'Saving',
        description: 'This Web is building with react and NextJs. For styles I used NextUI. For send emails I use SendGrid. ',
        video: Saving,
        git:'https://github.com/dayanMichelle/saveAnimalsNext',
        web:'https://saving-ivory.vercel.app/'

    },  {
        id:2,
        title: 'C R M',
        description: 'This web is building with React and localStorage for the data.',
        video:Crm,
        git:'https://github.com/dayanMichelle/crm-react',
    

    }
    ,  {
        id:3,
        title: 'Guitar',
        description: 'Guitar la is a guitar store. It is made with react for the frontend and strappi for the backend. Using data persistence with localstorage to increase the chances of purchases.',
        video:Guitarra,
        git:'https://github.com/dayanMichelle/guitarla_next',
    

    }
]