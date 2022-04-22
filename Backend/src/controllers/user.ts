import { Request, Response } from 'express';
import { Error as mongoError } from 'mongoose'
import { userModel } from '../models';
import { user, Nullable } from "../types";

export async function findAll(req: Request, res: Response): Promise<Response> {
    let records: user[];
    try {
        records = await userModel.find();
    } catch (error) {
        const message = (error as Error).message
        throw new Error(message);
    }
    return res.status(200).json(records);
}

export async function create(req: Request, res: Response): Promise<Response> {

    const { body } = req;

    let record: Nullable<user | Record<string, unknown>> = await userModel.exists({ email: body.email });

    if (record) return res.status(409).json({
        success: false,
        data: null,
        message: "Este usuario ya esta registrado"
    });

    try {
        record = await userModel.create(body);
    } catch (error) {
        const message = (error as Error).message
        throw new Error(message);
    }

    return res.status(201).json({
        success: true,
        data: record,
        message: "Usuario creado satisfactoriamente"
    })
}

export async function update(req: Request, res: Response): Promise<Response> {

    const { params, body } = req;
    const { CastError } = mongoError;

    let currentId = params.idUser;

    let record: Nullable<user | Record<string, unknown>>;

    try {

        record = await userModel.exists({ _id: currentId });

        if (!record) return res.status(409).json({
            success: false,
            data: null,
            message: "El usuario no existe"
        });

    } catch (error) {

        if (error instanceof CastError) return res.status(422).json({
            success: false,
            data: null,
            message: "El id especificado no es valido"
        })
    }

    try {
        record = await userModel.findByIdAndUpdate(currentId, { ...body });
    } catch (error) {
        const message = (error as Error).message
        throw new Error(message);
    }

    return res.status(200).json({
        success: true,
        data: record,
        message: "Usuario actualizado satisfactoriamente"
    });
}