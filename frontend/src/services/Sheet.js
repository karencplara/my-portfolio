import axios from 'axios';

export const save = (data) => {
    const config = {
        method: 'post',
        url: 'https://sheet.best/api/sheets/80dab7b2-5bae-492c-a6b6-d4c187775939',
        headers: {
         "Content-Type": "application/json",
        },
        data
    };
    axios(config)
        .then(res => {
          return res;
        })
        .catch(err => {
           return err;
        })
}
