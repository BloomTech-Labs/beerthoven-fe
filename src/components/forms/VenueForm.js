import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_VENUE } from "../graphql/queries";
import { Form, Input, Button, Row, Col, Radio } from "antd";
import YesNoRadioGroup from "../YesNoRadioGroup";

const VenueForm = ({ onSubmit }) => {
  const params = useParams();

  const editingVenue = params.id != null;

  const { loading, data } = useQuery(GET_VENUE, {
    skip: !editingVenue,
    variables: { id: params.id },
  });

  const [submitted, setSubmitted] = useState(false);

  const submitForm = (values) => {
    values.max_capacity = Number(values.max_capacity);
    values.min_income = Number(values.min_income);
    values.deposit_amount = Number(values.deposit_amount);
    values.max_decibel = Number(values.max_decibel);
    values.parking_max_capacity = Number(values.parking_max_capacity);

    setSubmitted(true);
    onSubmit(values, params.id);
  };

  const [form] = Form.useForm();

  if (!loading && data) {
    form.setFieldsValue(data.venue);
  }

  return !submitted ? (
    <Form form={form} layout="vertical" onFinish={submitForm}>
      <h1>Add New Venue</h1>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input placeholder="Enter venue name" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            label="Venue Type"
            name="venue_type"
            rules={[{ required: true, message: "'venue type' is required" }]}
          >
            <Input type="text" placeholder="Venue Type" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter street address" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item label="City" name="city" rules={[{ required: true }]}>
            <Input placeholder="Enter city" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Form.Item label="State" name="state" rules={[{ required: true }]}>
            <Input placeholder="Enter state" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="Zip code" name="zip" rules={[{ required: true }]}>
            <Input placeholder="Enter zip code" />
          </Form.Item>
        </Col>
        <Col span={12} />
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Form.Item
            label="Max Capacity"
            name="max_capacity"
            type="number"
            placeholder="Max Capacity"
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="Min Income" name="min_income">
            <Input type="number" placeholder="Minimum Income" />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="Deposit Amount" name="deposit_amount">
            <Input placeholder="Deposit Amount" type="number" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Form.Item
            label="Smoking Allowed"
            name="smoking_allowed"
            rules={[{ required: true }]}
          >
            <YesNoRadioGroup />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item
            label="Under 21 Allowed"
            name="under21_allowed"
            rules={[{ required: true }]}
          >
            <YesNoRadioGroup />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="Under 18 Allowed"
            name="under18_allowed"
            rules={[{ required: true }]}
          >
            <YesNoRadioGroup />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item
            label="Wheelchair Accessible"
            name="wheelchair_accessible"
            rules={[{ required: true }]}
          >
            <YesNoRadioGroup />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item
            label="Beer Served"
            name="alcohol_beer_provided"
            rules={[{ required: true }]}
          >
            <YesNoRadioGroup />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item
            label="Wine Served"
            name="alcohol_wine_provided"
            rules={[{ required: true }]}
          >
            <YesNoRadioGroup />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item
            label="Alcohol Spirits Served"
            name="alcohol_spirits_provided"
            rules={[{ required: true }]}
          >
            <YesNoRadioGroup />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item
            label="Food Served"
            name="food_served"
            rules={[{ required: true }]}
          >
            <YesNoRadioGroup />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="Max Decibel" name="max_decibel">
            <Input type="number" placeholder="Max Decibel" />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="Opening Time" name="opening_time">
            <Input placeholder="Opening Time" />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="Closing Time" name="closing_time">
            <Input placeholder="Closing Time" />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="Dance Floor Size" name="dance_floor_size">
            <Input placeholder="Dance Floor Size" />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item
            label="Indoor Venue"
            name="indoor_venue"
            rules={[{ required: true }]}
          >
            <YesNoRadioGroup />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item
            label="Outdoor Venue"
            name="outdoor_venue"
            rules={[{ required: true }]}
          >
            <YesNoRadioGroup />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item
            label="Parking Lot Available"
            name="parking_lot_available"
            rules={[{ required: true }]}
          >
            <YesNoRadioGroup />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Form.Item label="Parking Max Capacity" name="parking_max_capacity">
            <Input placeholder="Parking Max Capacity" type="number" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Form.Item
            label="TabC Certified"
            name="tabc_certified"
            rules={[{ required: true }]}
          >
            <YesNoRadioGroup />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  ) : (
    <p>Submitted successfully</p>
  );
};

export default VenueForm;
