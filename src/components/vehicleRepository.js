import Repository from './Repository';

const resource = '/svehicle';

export default {
    get() {
        return Repository.get(`${resource}/get-all`);
    }

    create(payload) {
        return Repository.post(`${resource}/save`, payload);
    }

   delete(id) {
        return Repository.delete(`${resource}/delete/${id}`);
   }
}