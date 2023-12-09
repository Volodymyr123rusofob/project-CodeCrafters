import Swal from 'sweetalert2';

export default function alertSuccess() {
    Swal.fire({
          title: "",
          text: "The product has been added to the cart!",
          icon: "success",
          confirmButtonColor: "#6d8434",
        });
 }