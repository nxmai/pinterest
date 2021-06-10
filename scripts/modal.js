let pin_image_blob = null;

document.querySelector('#upload_img').addEventListener('change', event => {
    console.log('do');
    if(event.target.files &&event.target.files[0]){
        if(/image\/*/.test(event.target.files[0].type)){
            const reader = new FileReader();

            reader.onload = function () {
                const new_img = new Image();

                new_img.src = reader.result;
                pin_image_blob = reader.result;

                new_img.onload = function() {
                    const modals_pin = document.querySelector('.add_pin_modal .modals_pin');

                    new_img.classList.add('pin_max_width');

                    document.querySelector('.add_pin_modal .pin_image').appendChild(new_img);
                    document.querySelector('#upload_img_label').style.display = 'none';

                    modals_pin.style.display = 'block';

                    if(
                        new_img.getBoundingClientRect().width < new_img.parentElement.getBoundingClientRect().width ||
                    new_img.getBoundingClientRect().height < new_img.parentElement.getBoundingClientRect().height
                    ) {
                        new_img.classList.remove('pin_max_width');
                        new_img.classList.add('pin_max_height');
                    }

                    modals_pin.style.opacity = 1;
                }
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    }

    document.querySelector('#upload_img').value = '';
})


document.querySelector('.save_pin').addEventListener('click', () => {
    const user_data = {
        author: 'jack',
        board: 'default',
        title: document.querySelector('#pin_title').value,
        description: document.querySelector('#pin_description').value,
        destination: document.querySelector('#pin_destination').value,
        img_blob: pin_image_blob,
        pin_size: document.querySelector('#pin_size').value,
    }

    console.log(user_data);
})

