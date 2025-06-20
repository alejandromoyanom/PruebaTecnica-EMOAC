def convertir_hora_12h_a_24h(s):
    horas_str = s[0:2]
    minutos = s[3:5]
    segundos = s[6:8]
    am_pm = s[8:10]

    horas = int(horas_str)

    if am_pm == "PM":
        if horas != 12:
            horas += 12
    elif am_pm == "AM":
        if horas == 12:
            horas = 0

    horas_24h_str = str(horas).zfill(2)

    return f"{horas_24h_str}:{minutos}:{segundos}"
