import React, { useState } from 'react';

import {
    EuiButton,
    EuiConfirmModal,
    EuiFlexGroup,
    EuiFlexItem,
} from '@elastic/eui';

export default () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const closeModal = () => setIsModalVisible(false);
    const showModal = () => setIsModalVisible(true);

    let modal;

    if (isModalVisible) {
        modal = (
            <EuiConfirmModal
                title="Thanks for using us"
                onCancel={closeModal}
                onConfirm={closeModal}
                cancelButtonText="No, don't do it"
                confirmButtonText="Yes, do it"
                defaultFocusedButton="confirm"
            >
                <p>Will call you ASAP !</p>
            </EuiConfirmModal>
        );
    }

    return (
        <div>
            <EuiFlexGroup responsive={false} wrap gutterSize="xs">
                <EuiFlexItem grow={false}>
                    <EuiButton fill onClick={showModal}>Book</EuiButton>
                </EuiFlexItem>
            </EuiFlexGroup>
            {modal}
        </div>
    );

}