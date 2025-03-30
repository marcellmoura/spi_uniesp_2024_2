pessoas = [
    {"nome": "Ana", "altura": 1.65, "genero": "f"},
    {"nome": "Candice", "altura": 1.58, "genero": "f"},
    {"nome": "Marcell", "altura": 1.92, "genero": "m"},
    {"nome": "Tonny", "altura": 1.93, "genero": "m"},
    {"nome": "Miller", "altura": 1.95, "genero": "m"},
    {"nome": "Mayyro", "altura": 1.75, "genero": "m"},
    {"nome": "Katia", "altura": 1.66, "genero": "f"},
    {"nome": "Maya", "altura": 1.68, "genero": "f"},
    {"nome": "João", "altura": 1.79, "genero": "m"},
    {"nome": "Tricia", "altura": 1.62, "genero": "f"},
    {"nome": "Tomaz", "altura": 1.61, "genero": "m"},
    {"nome": "Maria", "altura": 1.57, "genero": "f"},
    {"nome": "Marcio", "altura": 1.98, "genero": "m"},
    {"nome": "Victor", "altura": 1.72, "genero": "m"},
    {"nome": "Vinicus", "altura": 1.81, "genero": "m"},
]

maisAlto = max(pessoas, key=lambda p: p["altura"])
maisBaixo = min(pessoas, key=lambda p: p["altura"])

print(f"Maior altura: ({maisAlto['altura']})")
print(f"Menor altura: ({maisBaixo['altura']})")

homens = [p for p in pessoas if p["genero"] == "m"]
soma_alturas_homens = sum(h["altura"] for h in homens)
media_homens = soma_alturas_homens / len(homens)

print(f"A Média de altura dos homens: {media_homens:.2f}")

mulheres = [p for p in pessoas if p["genero"] == "f"]
print(f"O Número de mulheres cadastradas: {len(mulheres)}")
