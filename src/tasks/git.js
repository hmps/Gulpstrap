import git from 'gulp-git';
let pkg = require(process.cwd() + '/package.json');


class Git {
    constructor() {
        this.version = 'v' + pkg.version;
        this.message = 'Release ' + this.version;
    }

    tag(message) {
        message = message || this.message;
        return git.tag(this.version, message);
    }

    commit(message) {
        message = message || this.message;
        return git.commit(message);
    }

    push(remote = 'origin', branch = 'master', args) {
        return git.push(remote, branch, args);
    }
}

let gitInstance = new Git();

export { gitInstance as git };
