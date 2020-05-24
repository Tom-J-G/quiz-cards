import axios from 'axios';

const GetCategories = (data:any) => {
    axios.get('https://opentdb.com/api_category.php')
        .then(data);
}

const GetQuizCards = (amount: number, cat: number, data:any, difficult?: string, ) => {

    axios.get('https://opentdb.com/api.php', {
        params: {
            amount: amount,
            category: cat,
            difficulty: difficult
        }
    })
    .then(data);
}

export { GetCategories, GetQuizCards }