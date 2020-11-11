const createAPIPost = () =>
`
import axios from 'axios';

const post = async () => {
    let url = \`\`;
    let objBody = {}
    let res = await axios.post(url, objBody)
return res

}

export default post;
`

export default createAPIPost; 