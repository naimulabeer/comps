import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important information to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        efficitur finibus lacinia. In et volutpat ex. Phasellus ullamcorper
        dolor tellus, a sodales dolor cursus id. Sed tincidunt nunc neque, non
        bibendum dui accumsan nec. Donec malesuada dignissim lectus in iaculis.
        Maecenas dapibus facilisis neque, nec varius nibh dictum sed. Nunc
        tincidunt, dui vitae pulvinar facilisis, nunc neque vehicula lorem, et
        lacinia tortor sapien non dui. Quisque ac justo non nisl viverra
        lobortis. Pellentesque fringilla ultrices nibh, congue ullamcorper justo
        luctus et. Sed luctus metus vitae hendrerit semper. Integer eget est
        mollis diam accumsan lacinia. Maecenas eget justo vel elit maximus
        convallis. Curabitur venenatis massa sit amet diam bibendum interdum.
        Sed pretium libero cursus dui laoreet congue.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        efficitur finibus lacinia. In et volutpat ex. Phasellus ullamcorper
        dolor tellus, a sodales dolor cursus id. Sed tincidunt nunc neque, non
        bibendum dui accumsan nec. Donec malesuada dignissim lectus in iaculis.
        Maecenas dapibus facilisis neque, nec varius nibh dictum sed. Nunc
        tincidunt, dui vitae pulvinar facilisis, nunc neque vehicula lorem, et
        lacinia tortor sapien non dui. Quisque ac justo non nisl viverra
        lobortis. Pellentesque fringilla ultrices nibh, congue ullamcorper justo
        luctus et. Sed luctus metus vitae hendrerit semper. Integer eget est
        mollis diam accumsan lacinia. Maecenas eget justo vel elit maximus
        convallis. Curabitur venenatis massa sit amet diam bibendum interdum.
        Sed pretium libero cursus dui laoreet congue.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        efficitur finibus lacinia. In et volutpat ex. Phasellus ullamcorper
        dolor tellus, a sodales dolor cursus id. Sed tincidunt nunc neque, non
        bibendum dui accumsan nec. Donec malesuada dignissim lectus in iaculis.
        Maecenas dapibus facilisis neque, nec varius nibh dictum sed. Nunc
        tincidunt, dui vitae pulvinar facilisis, nunc neque vehicula lorem, et
        lacinia tortor sapien non dui. Quisque ac justo non nisl viverra
        lobortis. Pellentesque fringilla ultrices nibh, congue ullamcorper justo
        luctus et. Sed luctus metus vitae hendrerit semper. Integer eget est
        mollis diam accumsan lacinia. Maecenas eget justo vel elit maximus
        convallis. Curabitur venenatis massa sit amet diam bibendum interdum.
        Sed pretium libero cursus dui laoreet congue.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        efficitur finibus lacinia. In et volutpat ex. Phasellus ullamcorper
        dolor tellus, a sodales dolor cursus id. Sed tincidunt nunc neque, non
        bibendum dui accumsan nec. Donec malesuada dignissim lectus in iaculis.
        Maecenas dapibus facilisis neque, nec varius nibh dictum sed. Nunc
        tincidunt, dui vitae pulvinar facilisis, nunc neque vehicula lorem, et
        lacinia tortor sapien non dui. Quisque ac justo non nisl viverra
        lobortis. Pellentesque fringilla ultrices nibh, congue ullamcorper justo
        luctus et. Sed luctus metus vitae hendrerit semper. Integer eget est
        mollis diam accumsan lacinia. Maecenas eget justo vel elit maximus
        convallis. Curabitur venenatis massa sit amet diam bibendum interdum.
        Sed pretium libero cursus dui laoreet congue.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        efficitur finibus lacinia. In et volutpat ex. Phasellus ullamcorper
        dolor tellus, a sodales dolor cursus id. Sed tincidunt nunc neque, non
        bibendum dui accumsan nec. Donec malesuada dignissim lectus in iaculis.
        Maecenas dapibus facilisis neque, nec varius nibh dictum sed. Nunc
        tincidunt, dui vitae pulvinar facilisis, nunc neque vehicula lorem, et
        lacinia tortor sapien non dui. Quisque ac justo non nisl viverra
        lobortis. Pellentesque fringilla ultrices nibh, congue ullamcorper justo
        luctus et. Sed luctus metus vitae hendrerit semper. Integer eget est
        mollis diam accumsan lacinia. Maecenas eget justo vel elit maximus
        convallis. Curabitur venenatis massa sit amet diam bibendum interdum.
        Sed pretium libero cursus dui laoreet congue.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        efficitur finibus lacinia. In et volutpat ex. Phasellus ullamcorper
        dolor tellus, a sodales dolor cursus id. Sed tincidunt nunc neque, non
        bibendum dui accumsan nec. Donec malesuada dignissim lectus in iaculis.
        Maecenas dapibus facilisis neque, nec varius nibh dictum sed. Nunc
        tincidunt, dui vitae pulvinar facilisis, nunc neque vehicula lorem, et
        lacinia tortor sapien non dui. Quisque ac justo non nisl viverra
        lobortis. Pellentesque fringilla ultrices nibh, congue ullamcorper justo
        luctus et. Sed luctus metus vitae hendrerit semper. Integer eget est
        mollis diam accumsan lacinia. Maecenas eget justo vel elit maximus
        convallis. Curabitur venenatis massa sit amet diam bibendum interdum.
        Sed pretium libero cursus dui laoreet congue.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        efficitur finibus lacinia. In et volutpat ex. Phasellus ullamcorper
        dolor tellus, a sodales dolor cursus id. Sed tincidunt nunc neque, non
        bibendum dui accumsan nec. Donec malesuada dignissim lectus in iaculis.
        Maecenas dapibus facilisis neque, nec varius nibh dictum sed. Nunc
        tincidunt, dui vitae pulvinar facilisis, nunc neque vehicula lorem, et
        lacinia tortor sapien non dui. Quisque ac justo non nisl viverra
        lobortis. Pellentesque fringilla ultrices nibh, congue ullamcorper justo
        luctus et. Sed luctus metus vitae hendrerit semper. Integer eget est
        mollis diam accumsan lacinia. Maecenas eget justo vel elit maximus
        convallis. Curabitur venenatis massa sit amet diam bibendum interdum.
        Sed pretium libero cursus dui laoreet congue.
      </p>
    </div>
  );
}

export default ModalPage;
