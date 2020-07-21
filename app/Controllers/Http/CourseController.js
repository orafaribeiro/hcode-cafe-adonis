'use strict'

const Course = use('App/Models/Course');

class CourseController {

    async store({ request }) {

        const dataToCreate = request.only(['name', 'description', 'url', 'price']);

        return await Course.create(dataToCreate);

    }

    async list() {
        return await Course.all();
    }

    async show({ params }) {
        return await Course.find(params.id);
    }

    async update({ params, request }) {

        const course = await Course.findOrFail(params.id);

        const dataToUpdate = request.only(['name', 'description', 'url', 'price']);

        course.merge(dataToUpdate);

        await course.save();

        return course;

    }

    async delete({ params }) {

        const course = await Course.findOrFail(params.id);

        await course.delete();

        return {
            message: 'Curso excluído'
        }

    }

}

module.exports = CourseController
