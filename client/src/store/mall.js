import axios from 'axios';

export const getMall = (props) => {
    console.log("mall store check: " + props)
    return async () => {
        const sendRequest = async (res) => {
            res = await axios.get(`http://localhost:5000/api/v1/malls/${props}`);
            console.log("Res: " + res)

            if (res.status !== 200) {
                return;
            }

            return res
            // need to return the response data
        }
        try {
            await sendRequest();
        } catch (err) {
            const msg = err.message.split('status code')
            console.log('status code ' + msg[1].trim());
        }
    }
}
