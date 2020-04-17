import quests from '../data/data.js';
import { findById } from '../utils/utils.js';

const params = new URLSearchParams(window.location.search);

const someId = params.get('id');

const quest = findById(someId, quests);

document.querySelector('body').append(JSON.stringify(quest));


