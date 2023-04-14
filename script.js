"use strict"

const Ilya = {
    id:'1',
    name:'Ilya',
    age:2,
    email:'123@gmail.com',
    phone:+375336496497
}

const Ilya1 = {
    id:'1',
    name:'Ilya',
    age:4,
    email:'123@gmail.com',
    phone:+375336496497
}

class Contact {
    constructor(contact){
        this.data = contact
    }
    editContact(newContact){
        this.data = newContact
    }
    getContact(){
        return this.data  
    }
}
const contact = new Contact(Ilya)

class Contacts {
    constructor(){
        this.data = []
    }
    add(contact){
        const newContact = new Contact(contact)
        this.data = [...this.data, newContact.data]
    }

    edit(id, data){
        const contacts = this.data.map(element => {
            if(element.id === id){
                return {...element, ...data}
            }
            return element
        })
        contact.editContact.call(this, contacts)
    }
    remove(id){
        return this.data = this.data.filter(element => element.id !==id)
    }
    get(){
        return this.data
    }

}


const contacts = new Contacts()

// console.log(products)

// products.add(milk)
// products.add(milk1)
// products.edit('1', {product: 'salt'})
// products.edit('2', {amount: '10'})
// products.remove('2')
// products.get().log;

class ContactsApp extends Contacts{
    constructor(){
        super();
        this.render()
        this.id = 1;

    }
    render() {
        const form = document.querySelector('form')
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const { elements } = form
            this.contact = {}

            Array.from(elements)
                .filter(element => element.name)
                .forEach(element => {
                    const { name, value } = element
                    this.contact[name] = value
                    this.contact.id = this.id
                    element.value = ""
                })
            super.add(this.contact)
            this.createContactList()
        })
    }
    createContactList(){
        const contacts = document.querySelector('.contacts__list')
        const list = document.createElement('div')
        list.className = ('contact__item')

        const name = document.createElement("span")
        name.className = ('list__name')
        name.innerHTML =this.contact.name 
        
        const age = document.createElement("span")
        age.className = ('list__age')
        age.innerHTML = this.contact.age + "years"

        const email = document.createElement("span")
        email.className = ('list__email' )
        email.innerHTML = this.contact.email

        const phone = document.createElement("span")
        phone.className = ('list__phone' )
        phone.innerHTML = this.contact.phone

        const buttonContainer = document.createElement("div")

        const editButton = document.createElement('button')
        editButton.classList.add('list__editButton', 'button')
        editButton.innerHTML = "Edit"
        editButton.addEventListener("click", function(){
            let newName = prompt('Введите имя')
            name.innerHTML = newName
            let newAge = prompt('Введите возраст')
            age.innerHTML = newAge + "years"
            let newEmail = prompt('Введите email')
            email.innerHTML = newEmail 
            let newPhone = prompt('Введите телефон')
            phone.innerHTML = newPhone 
        })

        const removeButton = document.createElement('button')
        removeButton.classList.add('list__removeButton', 'button')
        removeButton.innerHTML = "Remove"
        removeButton.addEventListener("click", function(){
            name.innerHTML = ''
            age.innerHTML = ''
            phone.innerHTML = ''
            email.innerHTML = ''
        })

        buttonContainer.className = "buttonContainer"

        buttonContainer.append(editButton,removeButton)
        contacts.append(list)
        list.append(name,age,email,phone,buttonContainer)
        list.setAttribute('id', this.id)
        this.id++;

    }
}

const contactsApp = new ContactsApp()
console.log(contactsApp)