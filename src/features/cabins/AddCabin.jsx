import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>

        {/* <Modal.Open opens="table">
        <Button>Show table</Button>
        </Modal.Open>
        <Modal.Window name="table">
        <CabinTable />
        </Modal.Window> */}
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isopenModal, setIsopenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsopenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isopenModal && (
//         <Modal onClose={() => setIsopenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsopenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
