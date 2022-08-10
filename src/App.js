import React from 'react'
import { useFormik } from 'formik'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as yup from 'yup'
// import { jumbotron } from 'react-bootstrap' not work

// const validate = (values) => {
//   var errors = {}
//   if (!values.name) {
//     errors.name = 'Name is required'
//   } else if (values.name.length > 15) {
//     errors.name = 'Maximum 15 characters only'
//   } else if (values.name.length < 3) {
//     errors.name = 'Minimum 3 characters required'
//   }

//   return errors
// }

const App = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      list: '',
      password: '',
      confirmpassword: '',
    },
    // validate,
    validationSchema: yup.object({
      name: yup
        .string()
        .strict()
        .uppercase()
        .trim()
        .min(5, 'Minimum 5 characters required')
        .max(15, 'Maximum 15 characters only')
        .required('Name is required'),

      email: yup.string().email().required('Email is required'),

      list: yup.string().required('List is required'),

      password: yup.string().required('Password is required'),

      confirmpassword: yup
        .string()
        .required('Confirm Password is required')
        .oneOf(
          [yup.ref('password'), null],
          'Confirm password and password must be same'
        ),
    }),
    onSubmit: (userInputData) => {
      console.log(userInputData)
    },
  })
  return (
    <div className='container'>
      <form autoComplete='off' onSubmit={formik.handleSubmit}>
        <div className='form-group'>
          <label>Name :</label>
          <input
            className='form-control'
            type='text'
            name='name'
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <div className='text-danger'>{formik.errors.name}</div>
          ) : null}
        </div>
        <br />

        <div className='form-group'>
          <label>Email :</label>
          <input
            className='form-control'
            type='text'
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className='text-danger'>{formik.errors.email}</div>
          ) : null}
        </div>
        <br />

        <div className='form-group'>
          <label>Select list</label>
          <select
            className='form-control'
            name='list'
            onChange={formik.handleChange}
            value={formik.values.list}
          >
            <option value=''>--Select One--</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </div>
        {formik.errors.list ? (
          <div className='text-danger'>{formik.errors.list}</div>
        ) : null}
        <br />

        <div className='form-group'>
          <label>Password :</label>
          <input
            className='form-control'
            type='password'
            name='password'
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? (
            <div className='text-danger'>{formik.errors.password}</div>
          ) : null}
        </div>
        <br />

        <div className='form-group'>
          <label>Confirm Password :</label>
          <input
            className='form-control'
            type='password'
            name='confirmpassword'
            onChange={formik.handleChange}
            value={formik.values.confirmpassword}
          />
          {formik.errors.confirmpassword ? (
            <div className='text-danger'>{formik.errors.confirmpassword}</div>
          ) : null}
        </div>
        <br />
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default App
