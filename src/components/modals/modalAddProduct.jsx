import React, { Component } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalAddProduct extends Component {
    state = {
        modal: false,
        product : {
            id: Date.now(),
            id_category: '',
            name: '',
            description: "",
            availible_in: "",
            image_url: "",
            price: '',
            quantity: ''
        },
        resetProduct: {
            id: Date.now(),
            id_category: '',
            name: null,
            description: "",
            availible_in: "",
            image_url: "",
            price: '',
            quantity: ''
        }
    };

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    handleForms = event => {
        let newForms = {...this.state.product} //membuat newForms dengan data key value state.baru
        newForms[event.target.name] = event.target.value //kemudian isi newForms sesuai key object. Contoh: newForms['id'] = 20102020
        
        //event.target.nama_attribute di tag html, contoh event.target.name = mengambil data yg ada di attribute name (input name="jodi") jadi akan mengambil value name yg berisi jodi
        this.setState({product : newForms})
    }

    render() {
        return (
            <React.Fragment>
                <Button className={this.props.class} onClick={this.toggle} style={{ border: 'none' }}>{this.props.action} Product</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className + ' modal-dialog-centered modal-lg'}>
                    <ModalHeader toggle={this.toggle} style={{ borderBottom: 'none' }}>{this.props.action} Data</ModalHeader>
                    <ModalBody>
                        <form action="">
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Product Name</p>
                                </div>
                                <div className="col-md-9">
                                    <input type="text" name="name" className="form-control" onChange={this.handleForms} />
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Category</p>
                                </div>
                                <div className="col-md-3">
                                    <select className="form-control" name="id_category" onChange={this.handleForms}>
                                        <option selected hidden>Category</option>
                                        <option value='1'>Violin</option>
                                        <option value='2'>Guitar</option>
                                        <option value='3'>Bass</option>
                                        <option value='4'>Harp</option>
                                        <option value='5'>Ukulele</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Availible In</p>
                                </div>
                                <div className="col-md-3">
                                    <select name="availible_in" id="" className="form-control" onChange={this.handleForms}>
                                        <option selected hidden>Availible In</option>
                                        <option value="Bogor">Bogor</option>
                                        <option value="Jakarta">Jakarta</option>
                                        <option value="Bekasi">Bekasi</option>
                                        <option value="Bandung">Bandung</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Qty</p>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" className="form-control" name="quantity" onChange={this.handleForms} />
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Price</p>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" className="form-control" name="price" onChange={this.handleForms} />
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Description</p>
                                </div>
                                <div className="col-md-6">
                                    <textarea name="description" id="" cols="30" rows="5" className="form-control" onChange={this.handleForms} ></textarea>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Image Url</p>
                                </div>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" name="image_url" onChange={this.handleForms} />
                                </div>
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter style={{ borderTop: 'none' }}>
                        <button type="button" className={this.props.class} onClick={() => this.props.onAddProduct(this.state.product).then( () => {this.setState({product: this.state.resetProduct}); this.setState({ modal: false })} )}>{this.props.action}</button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}

export default ModalAddProduct;