import Swal from 'sweetalert2';

export default function alertPopUp(message = 'The product has been added to the basket!', icon= "success") {
    Swal.fire({
          title: "",
          text: message,
          icon: icon,
          confirmButtonColor: "#6d8434",
        });
 }