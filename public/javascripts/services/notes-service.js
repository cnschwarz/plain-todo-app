import { httpService } from './http-service.js'

export default class NotesService {

    constructor (url) {
        this.url = url;
        this.completedUrl = this.url + '/completed';
    }

    async getNoteById(id) {
        return await httpService.ajax("GET", this.url  + `/${id}`, undefined);
    }

    async getAllNotes() {
        return await httpService.ajax('GET', this.url, undefined);
    }

    async getCompletedNotes() {
        return await httpService.ajax('GET', this.completedUrl, undefined);
    }

    async createNote(note) {
        return await httpService.ajax('POST', this.url, note);
    }

    async updateNote(note) {
        return await httpService.ajax('PUT', this.url, note);
    }

    async deleteNote(note) {
        return await httpService.ajax('DELETE', this.url, note);
    }

}
