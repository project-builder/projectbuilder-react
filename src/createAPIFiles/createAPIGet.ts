const createAPIGet = () =>
`import axios from 'axios';

const getAll = async () => {
    let url = \`\`
    let { data } = await axios.get(url)
return data

}

export default getAll;
`

export default createAPIGet; 