const createAPIDeleteOne = () =>
`import axios from 'axios';

const deleteOne = async () => {
    let url = \`\`;
    let objBody = {}
    let res = await axios.delete(url, objBody)
return res

}

export default deleteOne;
`

export default createAPIDeleteOne;