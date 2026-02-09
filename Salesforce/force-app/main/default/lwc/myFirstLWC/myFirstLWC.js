import { LightningElement } from 'lwc';

export default class MyFirstLWC extends LightningElement {
    connectedCallback(){
        console.log('6::');
        console.log('5::');
    }
}