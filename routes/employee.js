// Route of the Employee
const routes = require('express').Router()

const {
    findAll,
    save,
    findById,
    update,
    delete: deleteEmployee
} = require('./../controllers/controll_employee')


/**
 * @swagger
 * /employee:
 *   get:
 *      tags:
 *      - Employees
 *      summary: Lista de empleados
 *      description: Método que retorna una lista de los empleados
 *      responses:
 *          '200':
 *              description: Resuesta Satisfactoria
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: string
 *                                  description: Indica el ID del empleado
 *                              name:
 *                                  type: string
 *                                  description: Especifica el Nombre
 *                                  example: Juan
 *                              phone:
 *                                  type: string
 *                                  description: Indica el telefono del empleado
 *                                  example: +573132024511
 *                              email:
 *                                  type: string
 *                                  description: Especifica la dirección de correo
 *                                  example: example@gmail
 *                              salary:
 *                                  type: integer
 *                                  description: Salario del empleado
 *                                  example: 5000
 *          '501':
 *              desciption: Error
 *              content:
 *                  text/plain:
 *                      schema:
 *                          type:  string
 *                          example: Error
 * /employee-save:
 *   post:
 *     tags:
 *     - Employees
 *     summary: Create a new employee
 *     description: Create a new employee
 *     responses:
 *       201:
 *         description: Employee created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 email:
 *                   type: string
 *                 salary:
 *                   type: number
 *                 department:
 *                   type: object
 *       404:
 *         description: Department not found
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Empleado no pudo ser guardado porque no existe el departamento
 *       501:
 *         description: Error
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Error del servidor
 * /employee:{id}:
 *  get:
 *      tags:
 *      - Employees
 *      summary: Empleado por ID
 *      description: Método que retorna un empleado dependiendo del ID
 *      parameters:
 *          - in: path
 *            name: id
 *            required:  true
 *            schema:
 *              type: string
 *      responses:
 *          '200':
 *              description: Resuesta Satisfactoria
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: string
 *                                  description: Indica el ID del empleado
 *                                  example: Id ingresado para la busqueda
 *                              name:
 *                                  type: string
 *                                  description: Especifica el Nombre
 *                                  example: Juan
 *                              phone:
 *                                  type: string
 *                                  description: Indica el telefono del empleado
 *                                  example: +573132024511
 *                              email:
 *                                  type: string
 *                                  description: Especifica la dirección de correo
 *                                  example: example@gmail
 *                              salary:
 *                                  type: integer
 *                                  description: Salario del empleado
 *                                  example: 5000
 *          '501':
 *              desciption: Error
 *              content:
 *                  text/plain:
 *                      schema:
 *                          type:  string
 *                          example: Error
 * 
 * /employee-update:
 *   put:
 *     tags:
 *     - Employees
 *     summary: Actualiza un Empleado
 *     description: Actualiza un Empleado
 *     responses:
 *       200:
 *         description: Departamento actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *                 phone:
 *                   type: number
 *                 email:
 *                   type: string
 *                 department:
 *                   type: object
 *       404:
 *         description: Empleado no encontrado
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Not Found
 *       501:
 *         description: Error
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Error del servidor
 * 
 * /employee-delete:
 *   delete:
 *     tags:
 *     - Employees
 *     summary: Eliminar a un empleado.
 *     description: Eliminar a un empleado.
 *     responses:
 *       200:
 *         description: Empleado eliminado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *                 phone:
 *                   type: number
 *                 email:
 *                   type: string
 *                 salary:
 *                   type: Number
 *                 department:
 *                   type: object
 *       404:
 *         description: Empleado no encontrado
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Empleado no encontrado
 *       501:
 *         description: Error
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Error del servidor
*/

routes.get('/',findAll)
routes.post('/',save)
routes.get('/:id',findById)
routes.put('/:idE',update)
routes.delete('/:idE',deleteEmployee)

module.exports = routes