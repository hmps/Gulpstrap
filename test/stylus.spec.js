/* global describe, it */
/* eslint-disable no-unused-expressions */
import {expect} from 'chai';
import gulp from 'gulp';
import stylus from '../dist/tasks/stylus';

describe('Stylus task', () => {

    beforeEach(() => {
        gulp.tasks = {};
    });

    it('should throw an error if no src is provided', () => {
        function errWrapper(opts) {
            return stylus({dest: '.'});
        }

        expect(errWrapper).to.throw(Error);
    });


    it('should throw an error if no dest is provided', () => {
        function errWrapper() {
            return stylus({src: '.'});
        }

        expect(errWrapper).to.throw(Error);
    });


    it('should create a stylus task', () => {
        stylus({src: 'src/*.stylus', dest: '.'});
        expect(gulp.tasks.stylus).to.exist;
    });

});
