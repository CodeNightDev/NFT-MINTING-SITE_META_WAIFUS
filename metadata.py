import csv
import random


types = ["Dominant", "Tsundere", "Yandere",
         "Kuudere", "Dandere", "Moekko", "Meganekko", "Idol Singer", "Catgirl", "Maid", "Otaku", "Volatile", "Varient"]
desc = "A META WAIFU"
fit = ["Action", "rom-com", "Shoujo", "Ecchi",
       "Harem", "kodomomuke", "LAB", "catGirl"]
with open('metadata.csv', 'w', newline="") as file:
    writer = csv.writer(file)
    writer.writerow(["name", "description", "BattleIQ",
                    "Intelligence", "Durability", "FIT_FOR", "AGILITY", "TYPE"])
    for i in range(1, 667):
        writer.writerow([
            f"#{i}", desc, str(random.randint(
                15, 115)) + "%", str(random.randint(15, 115)) + "%", str(random.randint(15, 115)) + "%", random.choice(fit), str(random.randint(15, 115)) + "%", random.choice(types)
        ])
