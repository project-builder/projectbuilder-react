const createAPIPut = () =>
`
import axios from \`axios\`;

const put = async () => {
    let url = \`\`;
    let objBody = {}
    let res = await axios.put(url, objBody)
return res

}

export default put;
`

export default createAPIPut; 