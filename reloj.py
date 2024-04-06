from tkinter import Tk, Label
from time import strftime

ventana = Tk ()
ventana.title("relogin el pillin")
ventana.config(bg="black")
ventana.geometry("350x250+10+10")
ventana.minsize(width=250, height=200)



ventana.columnconfigure(0, weight=15)
ventana.rowconfigure(0, weight= 15)

ventana.columnconfigure(0, weight=1)
ventana.rowconfigure(1, weight= 1)

ventana.columnconfigure(0, weight=1)
ventana.rowconfigure(2, weight= 1)

def obtener_tiempo():
    hora = strftime('%H:%M:%S')
    dia = strftime('%A')
    fecha = strftime('%d - %m - %y')

    x = texto_hora.winfo_height()
    t = int((x-5)*0.32)

    if dia == 'Mondy':
        dia = 'lunes'

    elif dia == 'Tuesdey':
        dia = 'martes'

    elif dia == 'Wednesday':
        dia = 'miercoles'

    elif dia == 'Thursday':
        dia = 'jueves'

    elif dia == 'Friday':
        dia = 'viernes'

    elif dia == 'Saturday':
        dia = 'sabado'  

    elif dia == 'sunday':
        dia = 'domingo'  

    texto_hora.config(text=hora, font = ('Radioland', t))
    texto_dia.config(text=dia)
    texto_fecha.config(text=fecha)

    texto_hora.after(1000, obtener_tiempo)

texto_hora = Label(ventana, fg = 'white', bg='black')
texto_hora.grid(row=0,sticky="nsew",ipadx=5,ipady=20)

texto_dia = Label(ventana, fg= 'white', bg='gray2', font=('',20))
texto_dia.grid(row=1,sticky="nsew")

texto_fecha = Label(ventana, fg= 'white', bg='gray3', font=('',20, 'bold'))
texto_fecha.grid(row=2,sticky="nsew")

obtener_tiempo()