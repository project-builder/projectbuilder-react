const createAPIDelete = () =>
`
import axios from \`axios\`;

const delete = async () => {
    let url = \`\`;
    let objBody = {}
    let res = await axios.delete(url, objBody)
return res

}

export default post;
`

export default createAPIDelete;