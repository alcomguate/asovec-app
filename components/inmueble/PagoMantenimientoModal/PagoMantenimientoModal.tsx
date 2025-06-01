'use client';
import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
    DateInput,
    DatePicker,
    Form,
    Select,
    SelectItem,
} from "@nextui-org/react";
import { addToast } from "@heroui/toast";
import { CalendarDate } from "@internationalized/date";

export const PagoMantenimientoModal = ({ manzana, lote }: { manzana?: string; lote?: string }) => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [backdrop, setBackdrop] = React.useState<"opaque" | "transparent" | "blur">("blur");
    const [submitted, setSubmitted] = React.useState<{ [k: string]: FormDataEntryValue } | null>(null);
    const currentMonth = (new Date().getMonth() + 1).toString(); // getMonth() is 0-based


    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!e.currentTarget.checkValidity()) {
            addToast({ title: "Por favor, completa todos los campos requeridos." });
            // Optionally, trigger browser validation UI
            e.currentTarget.reportValidity();
            return;
        }

        try {
            const formData = new FormData(e.currentTarget);
            const entries = Object.fromEntries(formData.entries());

            // Extract date parts from the DateInput value
            const fechaPago = typeof entries.fechaPago === "string" ? entries.fechaPago : "";
            let year = "", month = "", day = "";
            if (fechaPago) {
                [year, month, day] = fechaPago.split("-");
            }

            // Create a new plain object and add the inmueble property
            const data = {
                ...entries,
                dia: day,
                mes: month,
                anio: year,
                inmueble: {
                    manzana: manzana, // or use a variable if needed
                    lote: lote // or use a variable if needed
                }
            };

            console.log("Form data submitted:", JSON.stringify(data));
            const response = await fetch("/api/pagoinmueble", {
                method: "POST",
                body: JSON.stringify(data),
            });
            console.log("Form submitted successfully", response);

            addToast({
                title: "Pago registrado correctamente",
            });

            onOpenChange();

        } catch (error) {
            console.error("Error submitting form:", error);
            return;
        }
    };

    return (
        <>
            <Button color="primary" onPress={onOpen}>
                Nuevo pago
            </Button>
            <Modal
                isDismissable={false}
                isOpen={isOpen}
                backdrop={backdrop}
                placement="top-center"
                onOpenChange={onOpenChange}
                size="5xl">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>Pago - Manzana: {manzana} Lote: {lote}</ModalHeader>
                            <ModalBody>
                                <Form
                                    id="pago-form"
                                    className="w-full"
                                    validationBehavior="aria"
                                    onSubmit={onSubmit}
                                    autoComplete="off">
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">


                                        <Input
                                            isRequired
                                            required
                                            errorMessage="Campo requerido"
                                            label="Número de recibo:"
                                            name="recibo"
                                            type="text"
                                            variant="bordered"
                                        />
                                        <Input
                                            isRequired
                                            required
                                            errorMessage="Campo requerido"
                                            label="Nombre:"
                                            name="nombre"
                                            type="text"
                                            variant="bordered"
                                        />
                                        <Input
                                            isRequired
                                            required
                                            errorMessage="Campo requerido"
                                            label="Año pagado:"
                                            name="anioPagado"
                                            type="number"
                                            variant="bordered"
                                            defaultValue="2025"
                                        />
                                        <Select
                                            isRequired
                                            required
                                            errorMessage="Campo requerido"
                                            label="Mes pagado:"
                                            name="mesPagado"
                                            variant="bordered"
                                            defaultSelectedKeys={[currentMonth]}
                                        >
                                            <SelectItem key="1" value="1">Enero</SelectItem>
                                            <SelectItem key="2" value="2">Febrero</SelectItem>
                                            <SelectItem key="3" value="3">Marzo</SelectItem>
                                            <SelectItem key="4" value="4">Abril</SelectItem>
                                            <SelectItem key="5" value="5">Mayo</SelectItem>
                                            <SelectItem key="6" value="6">Junio</SelectItem>
                                            <SelectItem key="7" value="7">Julio</SelectItem>
                                            <SelectItem key="8" value="8">Agosto</SelectItem>
                                            <SelectItem key="9" value="9">Septiembre</SelectItem>
                                            <SelectItem key="10" value="10">Octubre</SelectItem>
                                            <SelectItem key="11" value="11">Noviembre</SelectItem>
                                            <SelectItem key="12" value="12">Diciembre</SelectItem>
                                        </Select>

                                        <DatePicker
                                            isRequired
                                            className="max-w-[284px]"
                                            label="Fecha de boleta de depósito"
                                            defaultValue={new CalendarDate(
                                                new Date().getFullYear(),
                                                new Date().getMonth() + 1,
                                                new Date().getDate()
                                            )}
                                        />

                                        <Input
                                            isRequired
                                            required
                                            errorMessage="Campo requerido"
                                            label="No. de boleta de depósito:"
                                            name="numeroDeposito"
                                            type="text"
                                            variant="bordered"
                                        />

                                        <Input
                                            isRequired
                                            required
                                            errorMessage="Campo requerido"
                                            label="Descripción:"
                                            name="descripcion"
                                            type="text"
                                            variant="bordered"
                                        />

                                        <Input
                                            isRequired
                                            required={true}
                                            label="Monto pagado:"
                                            variant="bordered"
                                            type="number"
                                            name="monto"
                                            startContent={
                                                <div className="pointer-events-none flex items-center">
                                                    <span className="text-default-400 text-small">Q.</span>
                                                </div>
                                            }
                                        />

                                    </div>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button type="submit" color="primary" form="pago-form" variant="solid">
                                    Aceptar
                                </Button>
                                <Button type="reset" variant="flat" onPress={onClose}>
                                    Cancelar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}